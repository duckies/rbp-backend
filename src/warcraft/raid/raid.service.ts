import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Raid } from './raid.entity';
import { Repository } from 'typeorm';
import { CreateRaidDto } from './dto/create-raid.dto';
import { UpdateRaidDto } from './dto/update-raid.dto';

@Injectable()
export class RaidService {
  constructor(
    @InjectRepository(Raid)
    private readonly raidRepository: Repository<Raid>,
  ) {}

  /**
   * Creating a raid should be done manually as we have to provide the
   * human readable name, the Raider.IO api does not do this.
   * @param createRaidDto
   */
  create(createRaidDto: CreateRaidDto): Promise<Raid> {
    return this.raidRepository.save(createRaidDto);
  }

  /**
   * Finds the latest raids and their progress.
   * @param take Takes only 10 most recent raids by default
   * @param skip Skips no raids by default
   */
  async findAll(
    take: number = 10,
    skip: number = 0,
  ): Promise<{ result: Raid[]; total: number }> {
    const [result, total] = await this.raidRepository.findAndCount({
      order: { id: 'DESC' },
      take,
      skip,
    });

    return { result, total };
  }

  /**
   * Finds the latest featured raids. Primarily used for the homepage.
   * @param take Takes only 4 most recent featuerd raids by default.
   * @param skip Skips no raids by default.
   */
  async findAllFeatured(
    take: number = 4,
    skip: number = 0,
  ): Promise<{ result: Raid[]; total: number }> {
    const [result, total] = await this.raidRepository.findAndCount({
      order: { id: 'DESC' },
      where: { isFeatured: true },
      take,
      skip
    });

    return { result, total };
  }

  /**
   * Returns the raid of the given id or fails.
   * @param id
   */
  findOne(id: number): Promise<Raid> {
    return this.raidRepository.findOneOrFail(id);
  }

  /**
   * Finds by raid slug for automated updating.
   * Does not throw failure exception.
   * @param slug
   */
  findOneBySlug(slug: string): Promise<Raid> {
    return this.raidRepository.findOne({ slug });
  }

  /**
   * Adding upsert functionality is not possible as we'd have to constantly
   * provide the human readable name, bloating functionality.
   * @param id
   * @param updateRaidDto
   */
  async update(id: number, updateRaidDto: UpdateRaidDto): Promise<Raid> {
    const raid = await this.raidRepository.findOneOrFail(id);

    const result = await this.raidRepository.merge(raid, updateRaidDto);

    return await this.raidRepository.save(result);
  }
}
