import { Link } from './link';

export interface IRelationship {
    primaryMedia: Link;
    casting: Link
}

export class Relationship implements IRelationship {
    primaryMedia: Link;
    casting: Link
    constructor(relationship?: IRelationship) {
        if (!relationship) {
            this.primaryMedia = new Link();
            this.casting = new Link();
        } else {
            this.primaryMedia = new Link(relationship.primaryMedia);
            this.casting = new Link(relationship.casting);
        }
    }
}
