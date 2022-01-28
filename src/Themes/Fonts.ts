const type = {
  base: 'Metric',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic'
}

const size = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  large: 23,
  normal: 21,
  regular: 19,
  medium: 17,
  small: 15,
  extraSmall: 13,
  tiny: 11
}

const style = {
  h1: {
    fontFamily: type.base,
    fontWeight: 'bold',
    fontSize: size.h1
  },
  h2Bold: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h2: {
    fontWeight: '500',
    fontSize: size.h2
  },
  h3bold: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}