import red from 'material-ui/colors/red'

export function layoutStyles(theme) {
	return {
		root: {
			width: '100%',
			height: '100%',
			zIndex: 1,
			overflow: 'hidden'
		},
		appFrame: {
			position: 'relative',
			display: 'flex',
			width: '100%',
			height: '100%'
		},
		content: {
			width: '100%',
			flexGrow: 1,
			backgroundColor: theme.palette.background.default,
			padding: 24,
			marginLeft: 50,
			height: 'calc(100% - 56px)',
			marginTop: 56,
			[theme.breakpoints.up('sm')]: {
				height: 'calc(100% - 64px)',
				marginTop: 64
			}
		}
	}
}

export function packageStyles(theme) {
	return {
		card: {
			maxWidth: 400
		},
		media: {
			height: 194
		},
		actions: {
			display: 'flex'
		},
		expand: {
			transform: 'rotate(0deg)',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			}),
			marginLeft: 'auto'
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		center: {
			position: 'absolute',
			top: '25%',
			left: '50%'
		},
		avatar: {
			backgroundColor: red[500]
		},
		heading: {
			color: 'rgba(0, 0, 0, 0.54)',
			margin: '1em 0 0.7em',
			fontSize: '1.5rem',
			fontWeight: 400,
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			lineHeight: '1.35417em'
		}
	}
}
