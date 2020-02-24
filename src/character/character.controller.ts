<<<<<<< HEAD
import { Controller, Get, Param, Put, UseGuards, Query } from '@nestjs/common';
import { Character } from './character.entity';
import { CharacterService } from './character.service';
import { FindCharacterDto } from '../blizzard/dto/find-character.dto';
import { AccessControlGuard, JWTGuard } from '../auth/guards';
import { User } from '../user/user.entity';
import { Usr } from '../user/user.decorator';
=======
import { Controller, Get, Param, Put, Query, UseGuards } from '@nestjs/common';
import { AccessControlGuard, JWTGuard } from '../auth/guards';
import { FindCharacterDto } from '../blizzard/dto/find-character.dto';
import { Usr } from '../user/user.decorator';
import { User } from '../user/user.entity';
import { Character } from './character.entity';
import { CharacterService } from './character.service';
>>>>>>> e48f288102f35f9231847af734197ed6d73ac028

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get('roster')
  getRoster(): Promise<Character[]> {
    return this.characterService.findRoster();
  }

  @Get('/known')
  @UseGuards(JWTGuard)
  getKnownCharacters(
    @Usr() user: User,
    @Query('force') force: boolean | undefined = undefined,
  ): Promise<Partial<User>> {
    return this.characterService.fetchKnownCharacters(user, force);
  }

  @Get('/:region/:realm/:name')
  findOne(@Param() findCharacterDto: FindCharacterDto): Promise<Character> {
    return this.characterService.findOne(findCharacterDto);
  }

  @Put('main/:region/:realm/:name')
  @UseGuards(AccessControlGuard)
  setMain(@Usr() user: User, @Param() findCharacterDto: FindCharacterDto): Promise<User> {
    return this.characterService.setMain(user, findCharacterDto);
  }
}
