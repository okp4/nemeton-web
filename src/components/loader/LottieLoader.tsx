import React from 'react'
import Lottie from 'react-lottie'

export type LottieLoaderProps = {
  animationData: Record<string, unknown>
  width?: number
  loop?: boolean
  autoplay?: boolean
}

export const LottieLoader: React.FC<LottieLoaderProps> = ({
  animationData,
  width = 150,
  loop = true,
  autoplay = true
}) => (
  <Lottie
    options={{
      loop,
      autoplay,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }}
    width={width}
  />
)
