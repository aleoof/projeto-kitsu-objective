export interface ILink {
    links: {
        self: string
        related: string
    }
}

export class Link implements ILink {
    links: {
        self: string
        related: string
    }

    constructor(link?: ILink) {
        if (!link) {
            this.links.self = ''
            this.links.related = ''
        } else {
            this.links.self = link.links.self || ''
            this.links.related = link.links.related || ''
        }
    }
}
