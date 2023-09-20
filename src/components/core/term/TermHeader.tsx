import colors from '../../shared/colors'

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
        return <span key={i} style={{
          color: colors.blue,
          paddingRight: '0.5em',
        }}>{word}</span>
      } else {
        return <span key={i} style={{
          color: colors.cyan,
          paddingRight: '0.5em',
        }}>{word}</span>
      }
    })

  return (
    <div style={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}>
      <span style={{
        color: colors.green,
        paddingRight: '0.5em',
      }}>%~&gt;</span>
      <span>{cmd}</span>
    </div>
  )
}
