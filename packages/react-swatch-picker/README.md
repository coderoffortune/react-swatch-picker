Polymer swatch picker clone in React and material-ui

## Usage

Basic

```Jsx
    <SwatchPicker />
```

With pre selected color

```Jsx
    <SwatchPicker color="#1e88e5" />
```

With custom palette

```Jsx
    <SwatchPicker colorList="['#000', '#111', '#222',  '#333', '#444', '#555', '#666', '#777',  '#888', '#999', '#aaa', '#bbb', '#ccc',  '#ddd', '#eee', '#fff']" />
```

Listen for color selection

```Jsx
    <SwatchPicker onColorSelect={this.listener} />
```
