import React from 'react';
import { Button, TextareaAutosize, Select, MenuItem, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Icon from '@mui/icons-material/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  image: {
    opacity: 0.3,
  },
}));

const ScriptGenForm = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <div>
          <div>
            <div>ScriptGen AI</div>
            <Button>
              <span>
                <Icon />
              </span>
            </Button>
            <div />
          </div>
          <div />
        </div>
        <div style={{ minHeight: '400px' }}>
          <div>
            <div>
              <div>
                <Button className="selected">
                  <span>
                    <div>Topic Input</div>
                  </span>
                </Button>
                <Button>
                  <span>
                    <div>URL Input</div>
                  </span>
                </Button>
              </div>
            </div>
            <div>
              <div>
                <div>Topic *</div>
                <div>
                  <div>
                    <TextareaAutosize
                      className="textarea"
                      placeholder="Introduce the HeyGen platform"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div>Output language *</div>
                <div>
                  <Select value="English">
                    <MenuItem value="English">English</MenuItem>
                  </Select>
                </div>
              </div>
              <div>
                <div>Tone</div>
                <div>
                  <TextField
                    id="topic.tone"
                    className="css-3gegq6"
                    type="text"
                    spellCheck={false}
                    placeholder="Professional"
                    value=""
                  />
                </div>
              </div>
              <div>
                <div>Additional info</div>
                <div>
                  <div>
                    <TextareaAutosize
                      className="textarea"
                      placeholder="An online video tool with built-in talking AI-avatars"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img
                src="https://static.heygen.ai/movio_static/images/home-script-gen.svg"
                alt=""
                className={classes.image}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <Button className={classes.button}>
              <span>Generate Script</span>
            </Button>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default ScriptGenForm;
