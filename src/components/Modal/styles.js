const styles = (theme) => ({
    modal: {
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 4),
        width:400,
        outline: 'none',
        borderRadius: 2 
        
    },
    titleText: {
        marginLeft: 14
    },
    title: {
        display: 'flex',
        justifyContent:'space-between',
        backgroundColor: '#FF3333',
        color: '#ffff',
        padding: theme.spacing(1),
        borderTopRightRadius: 2 ,
        borderTopLeftRadius: 2 ,
        
    },
    clearIcon: {
        cursor: 'pointer'
    }
})
export default styles;