declare module "*.png" {
  const src: string;
  export default src;
}

// Option A — SVGs as React components (needs @svgr/webpack)
declare module "*.svg" {
  import * as React from "react";
  const ReactComponent: React.FC<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  export default ReactComponent;
}