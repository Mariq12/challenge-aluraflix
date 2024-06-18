import PropTypes from 'prop-types'
import './Team.css'
import Collaborator from '../collaborator/Collaborator'
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    //Destructuración

    const { collaborators, deleteCollaborator, updateColor, like } = props

    const {primaryColor, title, id} = props.datos

    const secondaryColors = {
        backgroundColor: hexToRgba(primaryColor, 0.2)
    }
    const titleStyle = {
        borderColor: primaryColor
    }
    return <>
        {collaborators.length > 0 &&
            <section className="team" style={secondaryColors}>
                <input
                    type="color"
                    className='input-color'
                    value={primaryColor}
                    onChange={(event) => {
                        //console.log(event.target.value)
                        updateColor(event.target.value, id)
                        //console.log("titulo " + id)
                    }}
                />
                <h3 style={titleStyle}>{title}</h3>
                <div className="collaborator__container">
                    {
                        collaborators ? 
                        collaborators.map((collaborator, index) => <Collaborator 
                                datos={collaborator} 
                                key={index} 
                                primaryColor={primaryColor}
                                deleteCollaborator={deleteCollaborator}
                                like={like}
                                fav={collaborator.fav}
                                />
                            )
                        :null
                    }
                </div>
            </section>
        }
    </>
}

Team.propTypes = {
    datos: PropTypes.shape({
        title: PropTypes.string.isRequired,
        primaryColor: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    collaborators: PropTypes.arrayOf(
        PropTypes.shape({
            photo: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            position: PropTypes.string.isRequired,
            team: PropTypes.string.isRequired,
        })
    ).isRequired,
    deleteCollaborator: PropTypes.func.isRequired,
    updateColor: PropTypes.func.isRequired,
    like: PropTypes.func.isRequired
};

export default Team