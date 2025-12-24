export const file = {
  save(source: Blob, name: string) {
    const url = URL.createObjectURL(source);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    document.body.append(a);
    a.click();
    a.remove();
  },
  select(options?: { accept?: string }) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = options?.accept || '';
    input.multiple = true;

    input.onchange = (e) => {
      const files = (<HTMLInputElement>e.target).files;
      console.log(files);

      input.remove();
    };

    document.body.append(input);
    input.click();
  },
};
