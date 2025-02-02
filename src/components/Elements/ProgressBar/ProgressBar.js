// react
import React from "react";
import PropTypes from "prop-types";

// material-ui
import { withStyles, makeStyles } from "@material-ui/styles";
import { LinearProgress, Typography, Grid } from "@material-ui/core";

const CustomLinearProgress = withStyles(theme => ({
    root: {
        height: 10,
        borderRadius: 5,
    },
    colorPrimary: {
        backgroundColor:
            theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    },
    bar: {
        borderRadius: 5,
        backgroundColor: "#1a90ff",
    },
}))(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(6,1fr)",
        alignItems: "center",
        gridGap: theme.spacing(1),
    },
    label: {
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    value: {
        textAlign: "end",
    },
}));

/**
 * A horizontal bar for showing a percent of a total.
 */
const ProgressBar = ({ value, total, label, action }) => {
    const classes = useStyles();
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item xs={5}>
                <Typography variant="body2" className={classes.label}>
                    {label}
                </Typography>
            </Grid>
            <Grid item xs={1.75}>
                <Typography className={classes.value} variant="body2">
                    {value}
                </Typography>
            </Grid>
            <Grid item xs>
                <CustomLinearProgress
                    variant="determinate"
                    value={total > 0 ? (value / total) * 100 : 0}
                />
            </Grid>
            <Grid item xs={1}>
                <div>{action ?? null}</div>
            </Grid>
        </Grid>
    );
};

ProgressBar.propTypes = {
    /** the amount (numerator) for the bar */
    value: PropTypes.number.isRequired,
    /** the total (denominator) for the bar */
    total: PropTypes.number.isRequired,
    /** optional label */
    label: PropTypes.string,
    /** action used on card */
    action: PropTypes.node,
};

export default ProgressBar;
