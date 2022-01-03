'use strict';

const Action = require('./Action');
const { deletedEmojis } = require('../../structures/Emoji');
const { Events } = require('../../util/Constants');

class GuildEmojiDeleteAction extends Action {
  handle(emoji) {
    emoji.guild.emojis.cache.delete(emoji.id);
    deletedEmojis.add(emoji);
    /**
     * Emitted whenever a custom emoji is deleted in a guild.
     * @event Client#emojiDelete
     * @param {GuildEmoji} emoji The emoji that was deleted
     */
    this.client.emit(Events.GUILD_EMOJI_DELETE, emoji);
    return { emoji };
  }
}

module.exports = GuildEmojiDeleteAction;
