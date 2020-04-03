export interface IAttributes {
    createdAt: string;
    updatedAt: string;
    slug: string;
    name: string;
    malId: number
    description: string;
    image: { original: string };
}

export class Attributes implements IAttributes {
    createdAt: string;
    updatedAt: string;
    slug: string;
    name: string;
    malId: number
    description: string;
    image: { original: string };
    constructor(attributes?: IAttributes) {
        if (!attributes) {
            this.createdAt = ''
            this.description = ''
            this.image.original = ''
            this.malId = null
            this.name = ''
            this.slug = ''
            this.updatedAt = ''
        } else {
            this.createdAt = attributes.createdAt || ''
            this.description = attributes.description || ''
            this.image.original = attributes.image.original || ''
            this.malId = attributes.malId || null
            this.name = attributes.name || ''
            this.slug = attributes.slug || ''
            this.updatedAt = attributes.updatedAt || ''
        }
    }
}
