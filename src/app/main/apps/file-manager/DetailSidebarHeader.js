import FuseAnimate from '@fuse/core/FuseAnimate';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useSelector } from 'react-redux';
import Sidelist from "./Sidelist"

function DetailSidebarHeader(props) {
	const files = useSelector(({ fileManagerApp }) => fileManagerApp.files);
	const selectedItem = useSelector(({ fileManagerApp }) => files[fileManagerApp.selectedItemId]);

	if (!selectedItem) {
		return null;
	}

	return (
		<div className="flex flex-col justify-between h-full p-4 sm:p-12">
			<div className="toolbar flex align-center justify-end">
				<FuseAnimate animation="transition.expandIn" delay={200}>
					<IconButton>
						<Icon>delete</Icon>
					</IconButton>
				</FuseAnimate>
				<FuseAnimate animation="transition.expandIn" delay={200}>
					<IconButton>
						<Icon>cloud_download</Icon>
					</IconButton>
				</FuseAnimate>
				<IconButton>
					<Icon>more_vert</Icon>
				</IconButton>
			</div>

			<div className="p-12">
				<FuseAnimate delay={200}>
					<Typography variant="subtitle1" className="mb-8">
						{selectedItem.name}
					</Typography>
				</FuseAnimate>
				<FuseAnimate delay={300}>
					<Typography variant="caption" className="">
						<span>Edited</span>
						<span>: {selectedItem.modified}</span>
					</Typography>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default DetailSidebarHeader;
