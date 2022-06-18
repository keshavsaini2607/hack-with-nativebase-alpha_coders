import { useBreakpointValue } from "native-base";

export const size = useBreakpointValue({
  base: 300,
  sm: 500,
  // md: 350
});

export const imageHeight = useBreakpointValue({
    
});

export const flexDir = useBreakpointValue({
  base: "column",
  lg: "row",
});

export const display = useBreakpointValue({
  base: 'none',
  lg: 'block'
})