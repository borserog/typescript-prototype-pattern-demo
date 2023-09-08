import { Cloneable } from "./cloneable.model";

export class Contact implements Cloneable<Contact> {
  name: string;
  phone: string;
  dob: Date;
  socialMedia: SocialMedia;

  constructor(name: string, phone: string, dob: Date, socialMedia: SocialMedia) {
    this.name = name;
    this.phone = phone; 
    this.dob = dob;
    this.socialMedia = socialMedia;
  }

  cloneNaive(): Contact {
    // Not a copy at all!
    return this;
  };    
    
  cloneSpread(): Contact {
    // Shallow Copy
    return { ...this };
  };

  cloneJSON(): Contact {
    // Deep Copy but loses data
    return JSON.parse(JSON.stringify(this));
  };

  cloneTrue(): Contact {
    const clone = new Contact(
      this.name,
      this.phone,
      new Date(this.dob),
      {
        ...this.socialMedia
      }
    );

    // Handles nested objects
    clone.socialMedia = {
      ...this.socialMedia
    };

    return clone;
  }
}

export interface SocialMedia {
  linkedIn: string;
  email: string;
}
