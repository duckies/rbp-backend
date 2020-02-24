<<<<<<< HEAD
import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Provider } from '../auth/auth.service';
import { JWTPayload } from '../auth/dto/jwt.dto';
import { UpdateUserDto } from './dto/update-user.dto';
=======
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider, DiscordProfile } from '../auth/auth.service';
import { JWTPayload } from '../auth/dto/jwt.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
>>>>>>> e48f288102f35f9231847af734197ed6d73ac028

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

<<<<<<< HEAD
  create(blizzardid: number, battletag: string, blizzardtoken: string): Promise<User> {
    return this.repository.save({
      blizzardid,
      battletag,
      blizzardtoken,
=======
  create(discord_id: string, access_token: string, refresh_token: string, profile: DiscordProfile): Promise<User> {
    return this.repository.save({
      discord_id,
      discord_access_token: access_token,
      discord_refresh_token: refresh_token,
      discord_avatar: profile.avatar,
>>>>>>> e48f288102f35f9231847af734197ed6d73ac028
    });
  }

  async findAll(take = 100, skip = 0): Promise<{ result: User[]; total: number }> {
    const [result, total] = await this.repository.findAndCount({
      order: { id: 'DESC' },
      take,
      skip,
    });

    return { result, total };
  }

  findOne(id: number): Promise<User> {
    return this.repository.findOneOrFail(id);
  }

  async findOneByJwtPayload(payload: JWTPayload): Promise<User> {
    const user = await this.repository
      .createQueryBuilder('user')
      .addSelect([
        'user.blizzardid',
        'user.blizzardtoken',
        'user.blizzardTokenExpiration',
        'user.knownCharacters',
        'user.knownCharactersLastUpdated',
      ])
      .where('user.id = :id', { id: payload.id })
      .getOne();

    return user;
  }

<<<<<<< HEAD
  async findOneByProviderId(thirdPartyId: number, provider: Provider): Promise<User> {
    if (provider === Provider.BLIZZARD) {
      const user = await this.repository
=======
  async findOneByProviderId(thirdPartyId: number | string, provider: Provider): Promise<User> {
    if (provider === Provider.BLIZZARD) {
      return this.repository
>>>>>>> e48f288102f35f9231847af734197ed6d73ac028
        .createQueryBuilder('user')
        .select(['user.id'])
        .addSelect([
          'user.blizzardid',
          'user.blizzardtoken',
          'user.blizzardTokenExpiration',
          'user.knownCharacters',
          'user.knownCharactersLastUpdated',
        ])
        .where('user.blizzardid = :id', { id: thirdPartyId })
        .getOne();
<<<<<<< HEAD

      return user;
=======
    } else if (provider === Provider.DISCORD) {
      return this.repository
        .createQueryBuilder('user')
        .select(['user.id'])
        .addSelect(['user.discord_id'])
        .where('user.discord_id = :id', { id: thirdPartyId })
        .getOne();
>>>>>>> e48f288102f35f9231847af734197ed6d73ac028
    }

    throw new BadRequestException();
  }

  findAllWithGuildCharacters(): Promise<User[]> {
    return this.repository
      .createQueryBuilder('user')
      .innerJoinAndSelect('user.characters', 'character')
      .where('character.guild = :guild', { guild: 'Really Bad Players' })
      .andWhere('character.guildRank is not null')
      .getMany();
  }

  // async findKnownCharacters(user: User): Promise<User> {
  //   return this.repository.findOne({
  //     select: ['knownCharacters', 'knownCharactersLastUpdated'],
  //     where: { id: user.id },
  //   });
  // }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.repository.findOneOrFail(id);

    this.repository.merge(user, updateUserDto);

    return await this.repository.save(user);
  }
}
