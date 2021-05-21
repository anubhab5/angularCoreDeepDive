import { AfterViewInit, Component, ContentChild, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses: Array<Course> = COURSES;

  /*
  @ViewChild(CourseCardComponent)
  courseCard: CourseCardComponent;
  */

  /*
  @ViewChild('cardRef')
  courseCard: CourseCardComponent;
  */  

  @ViewChild('cardRef', { read: ElementRef })
  cardRef: ElementRef;

  @ViewChild('imgRef')
  imgElement: ElementRef;

  @ViewChildren(CourseCardComponent)
  cardsRef: QueryList<CourseCardComponent>;

  constructor() {
    console.log(" Course ", this.cardRef);
  }
  
  ngAfterViewInit(): void {
    // console.log(" Course ", this.cardRef);
    // console.log(" Course cards ", this.cardsRef);
    // console.log(this.cardsRef.first);

    // console.log(this.img);
  }

  onCardClicked(course: Course) {
    // console.log(" Course ", course);
    // console.log(" Course ", this.courseCard);
    console.log(" Course ", this.cardRef);
    // console.log(" Course ", this.imgElement);
    // this.imgElement.nativeElement.src = COURSES[1].iconUrl;
    // test.native
  }

}
