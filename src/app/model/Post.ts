import uuid from 'uuid';

export class Post {
   private id: string;
   private authorFullname: string;
   private thumbnail: string;
   private numComments: number;
   private createdTimeAgo: string;
   private read: boolean;
   private  title: string;
  constructor(authorFullname: string, thumbnail: string, numComments: number, createdTimeAgo: string, title: string) {
    this.id = uuid();
    this.authorFullname = authorFullname;
    this.thumbnail = thumbnail;
    this.numComments = numComments;
    this.createdTimeAgo = createdTimeAgo;
    this.read = false;
    this.title = title;
  }
}
