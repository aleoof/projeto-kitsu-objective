import { Link } from './link';
import { Attributes } from './attributes';
import { Relationship } from './relationship';

export interface ICharacter {
    id: string;
    type: string;
    links: { self: string };
    attributes: Attributes;
    relationship: Relationship;
}

export class Character implements ICharacter {
    id: string;
    type: string;
    links: { self: string };
    attributes: Attributes;
    relationship: Relationship;
    constructor(character?: ICharacter) {

        if (!character) {
            this.attributes = new Attributes()
            this.id = ''
            this.links.self = ''
            this.relationship = new Relationship()
            this.type = '';
        } else {
            this.attributes = new Attributes(character.attributes)
            this.id = ''
            this.links.self = ''
            this.relationship = new Relationship(character.relationship)
            this.type = character.type || '';
        }

    }
}
