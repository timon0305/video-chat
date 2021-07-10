import React from "react";
import {makeStyles, createStyles} from "@material-ui/core/styles";
import useChatContext from "../../../hooks/useChatContext/useChatContext";
import Grid from "@material-ui/core/Grid";
import {
    Badge,
    Card,
    Button,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CloseSmallIcon from "../../../icons/CloseSmallIcon";

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            // height: '100px',
            background: "#F4F4F6",
            // borderBottom: '1px solid #E4E7E9',
            display: "flex",
            justifyContent: "center",
            // alignItems: 'center',
            padding: "0.5em",
            flexDirection: "column",
        },
        text: {
            fontWeight: "bold",
            marginRight: 2,
        },
        closeChatWindow: {
            cursor: "pointer",
            display: "flex",
            float: 'right',
            background: "transparent",
            border: "0",
        },
        profile: {
            display: "flex",
            flexDirection: "row",
        },
        imag: {
            width: 60,
            height: 60,
        },
        imag1: {
            width: 20,
            height: 20,
            marginRight: "0.2em",
        },
        root: {
            // width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            // flexBasis: '33.33%',
            flexShrink: 0,
            color: "white",
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
        topH: {
            backgroundColor: "#5571C6",
        },
        statusBar: {
            width: "200px",
            display: "inline-table",
            verticalAlign: "top",
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
        scrollableView: {
            overflowY: "scroll",
            float: "left",
            height: "20.5em",
            position: "relative",
            marginTop: "1em",
        },
        mainProfileContainer: {
            margin: "0.4rem",
            paddingRight: '10px'
        },
        pr8: {
            paddingRight: '16px'
        },
        textRight: {
            textAlign: 'right'
        },
        mt8: {
            marginTop: '16px'
        },
        mb8: {
            marginBottom: '16px'
        },
        m4: {
            margin: '8px'
        },
        mt4: {
            marginTop: '8px'
        },
        mt2: {
            marginTop: '4px'
        },
        w100: {
            width: '100%'
        },
        p1: {
            padding: '2px'
        },
        pl2: {
            paddingLeft: '4px'
        },
        pr2: {
            paddingRight: '4px'
        },
        borderR5: {
            borderRadius: '5px'
        },
        mr2: {
            marginRight: '4px'
        },
        horizontalLine: {
            width: '100%',
        },
        font18: {
            fontSize: '18px'
        },
        font16: {
            fontSize: '16px'
        },
        font14: {
            fontSize: '14px'
        },
        font12: {
            fontSize: '12px'
        },
        font11: {
            fontSize: '11px'
        },
        font10: {
            fontSize: '10px'
        },
        primaryColor: {
            color: "#5571C6"
        },
        greyColor: {
            color: '#a9a9a9'
        },
        badge: {
            backgroundColor: 'green',
            color: '#ffffff'
        },
        admirButton: {
            backgroundColor: "#5571C6",
            color: '#ffffff',
            '&:hover': {
                background: '#5571C6',
            },
        },
        removeButton: {
            border: '1px solid #5571C6',
            color: "#5571C6"
        }
    })
);

export default function ScheduleWindowHeader() {
    const classes = useStyles();
    const {setIsScheduleWindowOpen} = useChatContext();

    return (
        <div className={classes.container}>
            <Grid container className={classes.mainProfileContainer}>
                <Grid item xs={6} className={classes.mt4}>
                    <span className={classes.font18}>2 Waiting</span>
                </Grid>
                <Grid item xs={5} className={[classes.textRight, classes.mt4].join(' ')}>
                    <span className={[classes.font18, classes.primaryColor].join(' ')}>Admit all</span>
                </Grid>
                <Grid item xs={1}>
                    <button
                        className={classes.closeChatWindow}
                        onClick={() => setIsScheduleWindowOpen(false)}
                    >
                        <CloseSmallIcon/>
                    </button>
                </Grid>
            </Grid>

            <hr className={classes.horizontalLine}/>

            <Grid container className={[classes.mainProfileContainer, classes.mt8, classes.pr8].join(' ')}>
                <Grid item xs={6}>
                    <Typography className={[classes.font16].join(' ')}><b>Alex Den</b></Typography>
                    <Typography className={[classes.greyColor, classes.font14].join(' ')}>Brother</Typography>
                </Grid>
                <Grid item xs={6} container className={classes.mt2}>
                    <Grid item xs={5}>
                        <Button  className={[classes.admirButton, classes.w100].join(' ')}>
                            Admir
                        </Button>
                    </Grid>
                    <Grid item xs={2}/>
                    <Grid item xs={5}>
                        <Button className={classes.removeButton}>
                            Remove
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container className={[classes.mainProfileContainer, classes.mb8, classes.mt8, classes.pr8].join(' ')}>
                <Grid item xs={6}>
                    <Typography className={[classes.font16].join(' ')}><b>Ria Martin</b></Typography>
                    <Typography className={[classes.greyColor, classes.font14].join(' ')}>Wife</Typography>
                </Grid>
                <Grid item xs={6} container className={classes.mt2}>
                    <Grid item xs={5}>
                        <Button className={[classes.admirButton, classes.w100].join(' ')}>
                            Admir
                        </Button>
                    </Grid>
                    <Grid item xs={2}/>
                    <Grid item xs={5}>
                        <Button className={classes.removeButton}>
                            Remove
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            <Card className={classes.mainProfileContainer}>
                <Grid item xs={12} className={classes.m4}>
                    <Grid container className={[classes.mainProfileContainer].join(' ')}>
                        <Grid item xs={8} className={classes.mt4}>
                            <span className={classes.font18}>Upcoming event: 11:00 a.m</span>
                        </Grid>
                        <Grid item xs={4} className={[classes.textRight, classes.mt4].join(' ')}>
                            <span className={[classes.font18, classes.primaryColor].join(' ')}>Admit all</span>
                        </Grid>
                    </Grid>

                    <hr className={classes.horizontalLine}/>
                    <Grid container className={[classes.mainProfileContainer, classes.mt8, classes.pr8].join(' ')}>
                        <Grid item xs={6}>
                            <Typography className={[classes.font16].join(' ')}><b>Ria Martin</b></Typography>
                            <Badge className={[classes.greyColor, classes.pl2, classes.pr2, classes.font11, classes.badge, classes.p1, classes.borderR5].join(' ')}>Wife</Badge>
                        </Grid>
                        <Grid item xs={6} container className={classes.mt2}>
                            <Grid item xs={5}>
                                <Button className={[classes.admirButton, classes.w100].join(' ')}>
                                    Admir
                                </Button>
                            </Grid>
                            <Grid item xs={2}/>
                            <Grid item xs={5}>
                                <Button className={classes.removeButton}>
                                    Remove
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container className={[classes.mainProfileContainer, classes.mt8, classes.mb8, classes.pr8].join(' ')}>
                        <Grid item xs={6}>
                            <Typography className={[classes.font16].join(' ')}><b>Joslin Rodgers</b></Typography>
                            <Typography className={[classes.greyColor,  classes.font11].join(' ')}>Mother</Typography>
                        </Grid>
                        <Grid item xs={6} container className={classes.mt2}>
                            <Grid item xs={5}>
                                <Button className={[classes.admirButton, classes.w100].join(' ')}>
                                    Admir
                                </Button>
                            </Grid>
                            <Grid item xs={2}/>
                            <Grid item xs={5}>
                                <Button className={classes.removeButton}>
                                    Remove
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Card>

            <Card className={classes.mainProfileContainer}>
                <Grid item xs={12} className={classes.m4}>
                    <Grid container className={[classes.mainProfileContainer].join(' ')}>
                        <Grid item xs={8} className={classes.mt4}>
                            <span className={classes.font18}>Upcoming event: 11:15 a.m</span>
                        </Grid>
                        <Grid item xs={4} className={[classes.textRight, classes.mt4].join(' ')}>
                            <span className={[classes.font18, classes.primaryColor].join(' ')}>Admit all</span>
                        </Grid>
                    </Grid>

                    <hr className={classes.horizontalLine}/>
                    <Grid container className={[classes.mainProfileContainer, classes.mt8, classes.pr8].join(' ')}>
                        <Grid item xs={6}>
                            <Typography className={[classes.font16].join(' ')}><b>Alex Walker</b></Typography>
                            <Badge className={[classes.greyColor, classes.pl2, classes.pr2, classes.font11, classes.badge, classes.p1, classes.borderR5].join(' ')}>Patient</Badge>
                        </Grid>
                        <Grid item xs={6} container className={classes.mt2}>
                            <Grid item xs={5}>
                                <Button className={[classes.admirButton, classes.w100].join(' ')}>
                                    Admir
                                </Button>
                            </Grid>
                            <Grid item xs={2}/>
                            <Grid item xs={5}>
                                <Button className={classes.removeButton}>
                                    Remove
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container className={[classes.mainProfileContainer, classes.mt8, classes.mb8, classes.pr8].join(' ')}>
                        <Grid item xs={6}>
                            <Typography className={[classes.font16].join(' ')}><b>Marti Valencia</b></Typography>
                            <Typography className={[classes.greyColor,  classes.font11].join(' ')}>Sister</Typography>
                        </Grid>
                        <Grid item xs={6} container className={classes.mt2}>
                            <Grid item xs={5}>
                                <Button className={[classes.admirButton, classes.w100].join(' ')}>
                                    Admir
                                </Button>
                            </Grid>
                            <Grid item xs={2}/>
                            <Grid item xs={5}>
                                <Button className={classes.removeButton}>
                                    Remove
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Card>
        </div>
    );
}
