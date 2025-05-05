import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { courseInterface } from './interface/course.interface';

@Injectable()
export class CourseService {
  private readonly coourses: courseInterface[] = [
    {
      teacherName: 'aziz',
      description: 'tarix',
      isActive: true,
      price: 200,
      title: 'alo',
      id: 691,
    },
  ];
  constructor() {}
  create(createCourseDto: any) {
    createCourseDto.id = Math.floor(Math.random() * 1000);
    this.coourses.push(createCourseDto);
    console.log(createCourseDto);
    return createCourseDto;
  }

  findAll() {
    return this.coourses;
  }

  findOne(id: number): any {
    return this.coourses.find((user) => user.id == id);
  }
  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} courjedse`;
  }
}
