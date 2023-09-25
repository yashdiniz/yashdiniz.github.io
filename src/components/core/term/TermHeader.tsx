import colors from '../../shared/colors'
import { Show } from 'solid-js'

interface Props {
  /** 
   * required: command to display
   */
  command: string;
  /** 
  * optional: arguments to the command
  */
  args?: string[];
}

export default function TermHeader({ command, args }: Props) {
  if (command == 'wget') {
    let url = `${document.location.host}${document.location.pathname}`
    command = `wget ${url}`
  } else {
    if (args) {
      command = `${command} ${args.join(' ')}`
    }
  }

  const cmd = command.trim().split(' ')
    .map((word, i) => {
      if (i == 0) {
        return <span style={{
          color: colors.blue,
          'padding-right': '0.5em',
        }}>{word}</span>
      } else {
        return <span style={{
          color: colors.cyan,
          'padding-right': '0.5em',
        }}>{word}</span>
      }
    })

  return (
    <div style={{
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    }}>
      <span style={{
        color: colors.green,
        'padding-right': '0.5em',
      }}>%~&gt;</span>
      {cmd}
    </div>
  )
}
