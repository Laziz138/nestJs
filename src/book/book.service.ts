import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { bookInterFace } from './bookInterFace/cookInterFace';

@Injectable()
export class BookService {
  private readonly books: bookInterFace[] = [];
  constructor() {}
  create(createBookDto: CreateBookDto) {
    return 'This action adds a new book';
  }

  findAll() {
    return `This action returns all book`;
  }

  async findOne(id: number) {
    const book = await this.books.find((book) => (book.id = id));
    if (!book) throw new NotFoundException();
    return book;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
