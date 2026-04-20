import type { Schema, Struct } from '@strapi/strapi';

export interface ContentLink extends Struct.ComponentSchema {
  collectionName: 'components_content_links';
  info: {
    displayName: 'Link';
    icon: 'attachment';
  };
  attributes: {
    LinkTitle: Schema.Attribute.String;
    Url: Schema.Attribute.String;
  };
}

export interface ContentParagraph extends Struct.ComponentSchema {
  collectionName: 'components_content_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'layer';
  };
  attributes: {
    Subtitle: Schema.Attribute.String;
    Text: Schema.Attribute.Blocks;
  };
}

export interface ContentRendezVous extends Struct.ComponentSchema {
  collectionName: 'components_content_rendez_vous';
  info: {
    displayName: 'RendezVous';
    icon: 'pin';
  };
  attributes: {
    Address: Schema.Attribute.String;
    EndHour: Schema.Attribute.Time;
    EventDate: Schema.Attribute.Date;
    Links: Schema.Attribute.Component<'content.link', true>;
    Place: Schema.Attribute.String;
    StartHour: Schema.Attribute.Time;
    Text: Schema.Attribute.Blocks;
    Title: Schema.Attribute.String;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'Section';
    icon: 'heart';
  };
  attributes: {
    Chapo: Schema.Attribute.Blocks;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Paragraphs: Schema.Attribute.Component<'content.paragraph', true>;
    Title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.link': ContentLink;
      'content.paragraph': ContentParagraph;
      'content.rendez-vous': ContentRendezVous;
      'section.section': SectionSection;
    }
  }
}
