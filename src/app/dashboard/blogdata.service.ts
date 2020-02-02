import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor(public http:HttpClient) { 
    var obj;
    //this.getJSON().subscribe(data => obj=data, error => console.log(error));
  }

  restData=
 [{
    "id": 1,
    "name": "Hakka Garlic Noodles",
    "description":"15 Minute Lo Mein! Made with just soy sauce, sesame oil, a pinch of sugar, ramen noodles or spaghetti noodles, and any veggies or protein you like. SO YUMMY!",
    "time": "3 hours ago",
    "img":"assets/noodles.jpg",
    "addedBy": "Deepanjan",
    "comments":[{
      "id":1,
      "description":"It looks so delicious...",
      "commentedBy":"Neeraj",
      "time":"5 minute ago"
    },
    {
      "id":2,
      "description":"Looks Awesome....!!",
      "commentedBy":"Deepanjan",
      "time":"1 minute ago"
    }

    ]
  },{
    "id": 2,
    "name": "Spicy Chicken Tacos",
    "description":"Imagine how good they taste because juicy chicken, smoky chipotle, creamy avocado, zippy lime, and a charred tortilla just SING together, right? I promise you, they sing.",
    "time": "3 hours ago",
    "img":"assets/chickentaco.jpg",
    "addedBy": "Deepanjan",
    "comments":[{
      "id":1,
      "description":"It looks so delicious...",
      "commentedBy":"Neeraj",
      "time":"5 minute ago"
    },
    {
      "id":2,
      "description":"Looks Awesome....!!",
      "commentedBy":"Deepanjan",
      "time":"1 minute ago"
    }

    ]
  },{
    "id": 3,
    "name": "Tofu Green Curry",
    "description":"Green curry. Green curry with some weirdo stuff in it (tofu? golden raisins? sweet potatoes?) that is going to make you feel like you won both the nutritional and yumo-food olympics.",
    "time": "3 hours ago",
    "img":"assets/greencurry.jpg",
    "addedBy": "Deepanjan",
    "comments":[{
      "id":1,
      "description":"It looks so delicious...",
      "commentedBy":"Neeraj",
      "time":"5 minute ago"
    },
    {
      "id":2,
      "description":"Looks Awesome....!!",
      "commentedBy":"Deepanjan",
      "time":"3 minute ago"
    },
    {
      "id":3,
      "description":"Looks Great....!!",
      "commentedBy":"Deepanjan",
      "time":"1 minute ago"
    }

    ]
  },{
  "id": 4,
  "name": "Coconut Ramen Curry",
  "description":"Coconut Curry Ramen with a creamy golden broth, pan-fried vegetables, cubes of golden brown tofu, and steamy delicious ramen noodles. Bonus: it’s vegan!",
  "time": "3 hours ago",
  "img":"assets/coconut.jpg",
  "addedBy": "Deepanjan",
  "comments":[{
    "id":1,
    "description":"It looks so delicious...",
    "commentedBy":"Neeraj",
    "time":"5 minute ago"
  },
  {
    "id":2,
    "description":"Looks Awesome....!!",
    "commentedBy":"Deepanjan",
    "time":"3 minute ago"
  },
  {
    "id":3,
    "description":"Looks Great....!!",
    "commentedBy":"Deepanjan",
    "time":"1 minute ago"
  }

  ]
}
];

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


public getJSON():Observable<any> {
    return this.http.get("http://localhost:3006/blogs").pipe(
      map(this.extractData));

}
public getJSONByID(id:string):Observable<any> {
  return this.http.get("http://localhost:3006/blogs/"+id).pipe(
    map(this.extractData));

}

public getData(){
  return this.restData;
}
}
