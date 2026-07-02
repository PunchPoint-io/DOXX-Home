import SliderImport from 'react-slick'
import type { Settings } from 'react-slick'

// react-slick ships as CJS; under Vite's esbuild interop the default can arrive
// wrapped as { default: Slider }. Unwrap so <Slider> is always the component.
const Slider = ((SliderImport as unknown as { default?: typeof SliderImport })
  .default ?? SliderImport) as typeof SliderImport

export default Slider
export type { Settings }
export type SliderInstance = SliderImport
