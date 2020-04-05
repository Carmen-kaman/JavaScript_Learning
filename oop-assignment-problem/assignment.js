class Course {
  constructor(title, len, price) {
    this.title = title;
    this.length = len;
    this.price = price;
  }

  get #GetPrice() {
    return `\$${this.price}`;
  }

  set #SetPrice(newPrice) {
    if (newPrice < 0) {
      console.log("The price should be positive number!!!");
      return;
    }
    this.price = newPrice;
  }

  Paid() {
    return this.length / this.price;
  }

  OutputSummary() {
    return `title:${this.title}, length:${this.length}, price:${
      this.#GetPrice
    }`;
  }
}

class PracticalCourse extends Course {
  constructor(title, len, price, num) {
    super(title, len, price);
    this.numOfExerxises = num;
  }
}

class TheoreticalCourse extends Course {
  constructor(title, len, price) {
    super(title, len, price);
    this.publish = () => {
      return "TheoreticalCourse Publish";
    };
  }
}

const course_1 = new Course("Java", 24, 15.99);
const course_2 = new Course("JS", 36, 19.99);

console.log(course_1, course_1.Paid(), course_1.OutputSummary());
console.log(course_2, course_2.Paid(), course_2.OutputSummary());

const practice = new PracticalCourse("Java", 24, 15.99, 3);
const theoretical = new TheoreticalCourse("JS", 36, 19.99);

console.log(practice, practice.Paid(), practice.OutputSummary());
console.log(
  theoretical,
  theoretical.Paid(),
  theoretical.OutputSummary(),
  theoretical.publish()
);
