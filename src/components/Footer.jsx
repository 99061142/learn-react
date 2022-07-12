import PropTypes from 'prop-types';

const Footer = (props) => {
    return (
        <div className="footer">
            <h1>{ props.title }</h1>
        </div>
    )
}

Footer.defaultProps = {
    title: 'Footer title',
}

Footer.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Footer