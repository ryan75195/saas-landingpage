import React from 'react'
import Typography from '@components/ui/typography'

interface FeatureProps {
  icon: React.ReactNode
  headline: string
  description: string
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  headline,
  description
}) => {
  return (
    <div className="flex flex-col items-center gap-4 text-center max-w-xs">
      <div
        className="py-4 px-4 rounded-md border max-w-fit flex items-center
          justify-center"
      >
        {icon}
      </div>
      <Typography variant="h3" className="text-center">
        {headline}
      </Typography>
      <Typography
        variant="p"
        className="text-minor text-center"
      >
        {description}
      </Typography>
    </div>
  )
}

export default Feature
