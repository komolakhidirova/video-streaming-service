import styled from 'styled-components'

const Footer = props => {
	return <Container>Komola Khidirova © 2024</Container>
}

const Container = styled.div`
	top: -70px;
	bottom: 0;
	left: 0;
	right: 0;
	height: 250px;
	background-color: #090b13;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding: 40px;
	z-index: 3;
`

export default Footer
