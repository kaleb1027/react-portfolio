import React from 'react';

const styles = {
  align: {
    textAlign: "center"
  }
}
export default function Resume() {
  return (
    <div style={styles.align}>
      <h1>Resume Page</h1>
      <p>
        Click <a href="https://drive.google.com/file/d/1NnS_BR2HfohqzXPzRvwG_z6gu4cgkxdW/view?usp=sharing">HERE</a> for my resume!
      </p>
    </div>
  );
}
