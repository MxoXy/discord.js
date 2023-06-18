'use strict';

const { GatewayCloseCodes } = require('discord-api-types/v10');
const ErrorCodes = require('./ErrorCodes');

const unrecoverableErrorCodeMap = {
  [GatewayCloseCodes.AuthenticationFailed]: ErrorCodes.TokenInvalid,
  [GatewayCloseCodes.InvalidShard]: ErrorCodes.ShardingInvalid,
  [GatewayCloseCodes.ShardingRequired]: ErrorCodes.ShardingRequired,
  [GatewayCloseCodes.InvalidIntents]: ErrorCodes.InvalidIntents,
  [GatewayCloseCodes.DisallowedIntents]: ErrorCodes.DisallowedIntents,
};

module.exports = unrecoverableErrorCodeMap;
