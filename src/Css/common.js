import resolution from "../Function/scale";

const common = {
    buttonCommon: {
        width: resolution.scale * 50,
        height: resolution.scale * 50,
        borderRadius: resolution.scale * 10,
        borderWidth: 1,
        borderColor: '#7FFF00',
    },
    columnCenter: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    left: {
        flex:1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    right: {
        flex:1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    rowCenter: {
        flex:1,
        flexDirection: 'row',
    },
    border: {
        borderWidth: 1,
        borderStyle: 'solid',
    },
    bgNone: {
        backgroundColor: 'rgba(0,0,0,0)'
    },
    textCenter: {
        flex: 1,
        textAlign: 'center'
    },
    white: {
        color: 'white'
    }
}


export default common