import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { COURSES } from 'src/db-data';
import { CourseImageComponent } from '../course-image/course-image.component';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  // @ContentChild('courseImage')
  // img;

  @ContentChild(CourseImageComponent, {read: ElementRef})
  img: CourseImageComponent;

  constructor() { }

  ngAfterViewInit(): void {
    console.log(this.img);
  }

  ngOnInit(): void {
  }

  onCourseViewed() {
    console.log("Inside child component...");
    this.courseEmitter.emit(this.course);
  }

}
