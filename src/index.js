import React from 'react'
import omitBy from 'lodash/omitBy'
import isUndefined from 'lodash/isUndefined'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import onlyUpdateForKeys from 'recompose/onlyUpdateForKeys'

const clean = (style) => omitBy(style, isUndefined)

const enhance = compose(
  setDisplayName('Flexin'),
  onlyUpdateForKeys([
    'children',
    'className',
    'alignContent',
    'alignItems',
    'alignSelf',
    'basis',
    'direction',
    'grow',
    'justifyContent',
    'order',
    'shrink',
    'wrap',
    'inline'
  ])
)

const Flexin = ({
  children,
  className,
  alignContent,
  alignItems,
  alignSelf,
  basis,
  direction,
  grow,
  justifyContent,
  order,
  shrink,
  wrap,
  inline
}) => (
  <div
    className={className}
    style={clean({
      display: inline ? 'inline-flex' : 'flex',
      alignContent,
      alignItems,
      alignSelf,
      flexBasis: basis,
      flexDirection: direction,
      flexGrow: grow,
      flexShrink: shrink,
      flexWrap: wrap,
      justifyContent,
      order
    })}>
    {children}
  </div>
)

export default enhance(Flexin)
