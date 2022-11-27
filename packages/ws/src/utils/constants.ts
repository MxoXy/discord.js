import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';
import { lazy } from '@discordjs/util';
import { Collection } from '@draftbot/collection';
import { APIVersion, GatewayOpcodes } from 'discord-api-types/v10';
import type { OptionalWebSocketManagerOptions, SessionInfo } from '../ws/WebSocketManager.js';

/**
 * Valid encoding types
 */
export enum Encoding {
	JSON = 'json',
}

/**
 * Valid compression methods
 */
export enum CompressionMethod {
	ZlibStream = 'zlib-stream',
}

const packageJson = readFileSync(join(__dirname, '..', '..', 'package.json'), 'utf8');
const Package = JSON.parse(packageJson);

export const DefaultDeviceProperty = `@draftbot/ws ${Package.version}`;

const getDefaultSessionStore = lazy(() => new Collection<number, SessionInfo | null>());

/**
 * Default options used by the manager
 */
export const DefaultWebSocketManagerOptions: OptionalWebSocketManagerOptions = {
	shardCount: null,
	shardIds: null,
	largeThreshold: null,
	initialPresence: null,
	identifyProperties: {
		browser: DefaultDeviceProperty,
		device: DefaultDeviceProperty,
		os: process.platform,
	},
	version: APIVersion,
	encoding: Encoding.JSON,
	compression: null,
	retrieveSessionInfo(shardId) {
		const store = getDefaultSessionStore();
		return store.get(shardId) ?? null;
	},
	updateSessionInfo(shardId: number, info: SessionInfo | null) {
		const store = getDefaultSessionStore();
		if (info) {
			store.set(shardId, info);
		} else {
			store.delete(shardId);
		}
	},
	handshakeTimeout: 30_000,
	helloTimeout: 60_000,
	readyTimeout: 15_000,
};

export const ImportantGatewayOpcodes = new Set([
	GatewayOpcodes.Heartbeat,
	GatewayOpcodes.Identify,
	GatewayOpcodes.Resume,
]);
