# json-line-number
Find line number where key was defined in JSON. Very helpfull for long config or translations files to find line where some.key.form.code is defined.


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
