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
  // let maxlen = 42;
  // if (command.length > maxlen) {
  //   command = command.slice(0, maxlen) + '…'
  // }

  return (
    <div style={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    }}>
      <span style={{
        color: '#00ff00',
        paddingRight: '0.5em',
      }}>%~&gt;</span>
      <span>{command}</span>
    </div>
  )
}
