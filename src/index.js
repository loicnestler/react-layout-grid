import React from 'react'
// import PropTypes from 'prop-types'

import styled from 'styled-jss'

const LayoutContext = React.createContext()

const LayoutGrid = (props) => (
	<LayoutContext.Provider
		value={{ breakpoints: props.breakpoints, maxWidth: props.maxWidth, gutter: props.gutter, debug: props.debug }}
		{...props}
	/>
)

const Container = (props) => {
	const ContainerDiv = styled('div')({
		display        : 'flex',
		flexDirection  : 'column',
		justifyContent : 'center',
		margin         : '0 auto'
	})

	return (
		<LayoutContext.Consumer>
			{(context) => <ContainerDiv style={{ maxWidth: `${context.maxWidth}px` }} {...props} />}
		</LayoutContext.Consumer>
	)
}

const Row = (props) => {
	const RowDiv = styled('div')({
		display        : 'flex',
		flexDirection  : 'row',
		width          : '100%',
		// justifyContent : 'space-between',
		justifyContent : 'flex-start',
		flexWrap       : 'wrap'
	})

	return <LayoutContext.Consumer>{(context) => <RowDiv {...props} />}</LayoutContext.Consumer>
}

const Col = (props) => {
	return (
		<LayoutContext.Consumer>
			{(context) => {
				let debugColor
				if (context.debug)
					debugColor = `#${Math.floor(Math.random() * (0xfff - 0) + 0).toString(16)}${Math.floor(
						Math.random() * (0xfff - 0) + 0
					).toString(16)}`

				const style = {
					display    : 'flex',
					width      : '100%',
					background : debugColor || 'inherit'
				}

				context.breakpoints.forEach((width, index) => {
					style[`@media all and (min-width: ${width}px)`] = {
						width : `${props.span[index] / 12 * 100}%`
					}
				})

				const ColDiv = styled('div')(style)

				return <ColDiv {...props} />
			}}
		</LayoutContext.Consumer>
	)
}

export { LayoutGrid, Container, Row, Col }
