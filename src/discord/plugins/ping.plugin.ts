import { Injectable } from '@nestjs/common';
import { Context } from '../discord.context';
import { Command, Plugin } from '../discord.decorators';
import { DiscordPlugin } from './plugin.class';

@Injectable()
@Plugin({ name: 'Ping' })
export class PingPlugin extends DiscordPlugin {
  @Command({ name: 'ping', description: 'Replies with pong!' })
  async pong(ctx: Context) {
    await ctx.message.reply('Pong!');
  }
}
