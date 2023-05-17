import { ChangeEvent } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

import { Box, IconButton, Tooltip } from '@mui/material';
import { DeleteOutlineRounded, ContentCopyRounded } from '@mui/icons-material';

import { useTranslation } from 'react-i18next';
import '../../i18nex';

type ComponentProps = {
  coloreVars: string;
  codeVars: string;
  handlerOnChangeVars(evn: ChangeEvent<HTMLTextAreaElement>): void;
  isVariablesOpen: boolean;
};

function Variables(props: ComponentProps) {
  const { t } = useTranslation();

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        height: props.isVariablesOpen ? '30%' : '0',
      }}
    >
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '85%',
        }}
      >
        <CodeEditor
          value={props.codeVars}
          language="json"
          placeholder=""
          onChange={props.handlerOnChangeVars}
          padding={15}
          style={{
            width: '100%',
            height: props.isVariablesOpen ? '100%' : 0,
            fontSize: 12,
            backgroundColor: `${props.coloreVars}`,
            fontFamily:
              'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            overflow: 'auto',
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '15%',
        }}
      >
        {props.isVariablesOpen && (
          <Tooltip title={t('editor.btnClear')} placement="left" arrow>
            <IconButton>
              <DeleteOutlineRounded />
            </IconButton>
          </Tooltip>
        )}
        {props.isVariablesOpen && (
          <Tooltip title={t('editor.btnCopy')} placement="left" arrow>
            <IconButton>
              <ContentCopyRounded />
            </IconButton>
          </Tooltip>
        )}
      </Box>
    </Box>
  );
}

export default Variables;
