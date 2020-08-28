const styles = () => ({
    drawerPaper: {
        width: 240,
        maxWidth: 240,
        zIndex: 10,
        position: 'relative',
      },
      drawer: {
        height: '100%',
      },
      menuLink: {
        textDecoration: 'none',
        color: '#111111'
      },
      menuLinkActive: {
        '&>div': {
          backgroundColor: 'rgba(0,0,0,0.08)',
        },
      }
})
export default styles;