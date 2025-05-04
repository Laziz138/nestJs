import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { courseInterface } from './interface/course.interface';

@Injectable()
export class CourseService {
  private readonly coourses: courseInterface[] = [];
  constructor() {}
  create(createCourseDto: any) {
    createCourseDto.id = Math.floor(Math.random() * 1000);
    this.coourses.push(createCourseDto);
    return createCourseDto;
  }

  findAll() {
    return this.coourses;
  }

  findOne(id: string) {
    return `This action returns a #${id} course`;
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
