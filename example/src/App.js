import React, { Component } from 'react'

import { LayoutGrid, Container, Row, Col } from 'react-layout-grid'

export default class App extends Component {
	render() {
		return (
			<div>
				<LayoutGrid
					breakpoints={[
						420,
						720,
						1020
					]}
					maxWidth={1020}
					gutter={20}
					debug
				>
					<Container>
						<Row>
							<Col
								span={[
									12,
									6,
									3
								]}
							>
								<span>hallo</span>
							</Col>
							<Col
								span={[
									12,
									6,
									3
								]}
							>
								<span>hallo</span>
							</Col>
							<Col
								span={[
									12,
									6,
									3
								]}
							>
								<span>hallo</span>
							</Col>

							<Col
								span={[
									12,
									6,
									3
								]}
							>
								<span>hallo</span>
							</Col>
						</Row>

						<Row>
							<Col
								span={[
									12,
									6,
									3
								]}
							>
								<span>hallo</span>
							</Col>
							<Col
								span={[
									12,
									6,
									6
								]}
							>
								<span>hallo</span>
							</Col>
							{/* <Col
								span={[
									12,
									6,
									3
								]}
							>
								<span>hallo</span>
							</Col> */}
						</Row>
						{/* <Row>
							<Col>
								<h1>hi</h1>
							</Col>
						</Row> */}
					</Container>
				</LayoutGrid>
			</div>
		)
	}
}
