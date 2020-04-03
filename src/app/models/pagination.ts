import { Character } from './character';

export interface IPagination {
    data: Character[];
    meta: {
        count: number
    };
    links: {
        first: string;
        prev: string
        next: string
        last: string
    }
}

export class Pagination implements IPagination {
    data: Character[];
    meta: {
        count: number
    };
    links: {
        first: string;
        prev: string
        next: string
        last: string
    }
    constructor(pagination?: IPagination) {
        if (!pagination) {
            this.data = [];
            this.meta.count = null;
            this.links.first = '';
            this.links.last = '';
            this.links.next = '';
            this.links.prev = '';
        } else {
            this.data = (pagination.data || []).map(character => new Character(character));
            this.meta.count = pagination.meta.count || null;
            this.links.first = pagination.links.first || '';
            this.links.last = pagination.links.last || '';
            this.links.next = pagination.links.next || '';
            this.links.prev = pagination.links.prev || '';
        }
    }
}
