# json-line-number
Find line number where key was defined in JSON. Very helpful for long config or translations files to find line where some.key.form.code is defined. 
*json-line-number* does not parse file as normal JSON. There are differences:

1. It will allow comments in code (started with //)
2. It will allow single quotes (') in object keys.
3. It will skip any char before first ({). It means you can use files started with `define(`

## Install global (recommended) 

```
git clone https://github.com/maxsivanov/json-line-number.git
cd json-line-number
sudo npm i . -g
```

## Install local

```
git clone https://github.com/maxsivanov/json-line-number.git
cd json-line-number
npm i
```

## Example 

You can list all keys and than filter them out with standard pipe utilities

```
>json-line somejsonfile.json | head
required 5
optional 6
ok 7
cancel 8
general 9
general.charactersLeft 10
general.charactersOver 11
general.bytesLeft 12
general.bytesOver 13
other.one 14
other.two 16
```

Or you can pass search substring as the parameter 

```
>json-line somejsonfile.json general 
general 9
general.charactersLeft 10
general.charactersOver 11
general.bytesLeft 12
general.bytesOver 13
```
