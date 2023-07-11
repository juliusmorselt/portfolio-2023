declare module '@sanity/block-content-to-react' {
    import { ComponentType } from 'react';
  
    interface BlockContentProps {
      blocks: any[];
      [key: string]: any;
    }
  
    const BlockContent: ComponentType<BlockContentProps>;
  
    export { BlockContent };
  }