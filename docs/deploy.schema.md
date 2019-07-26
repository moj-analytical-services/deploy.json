---
template: definitions
hide-nav: true
---

# MOJ Analytical Services Deploy.json Specification Schema

```
https://cdn.jsdelivr.net/gh/moj-analytical-services/deploy.json/deploy.schema.json
```

| Abstract               | Extensible | Status       | Identifiable | Custom Properties | Additional Properties | Defined In                               |
| ---------------------- | ---------- | ------------ | ------------ | ----------------- | --------------------- | ---------------------------------------- |
| Cannot be instantiated | Yes        | Experimental | No           | Forbidden         | Permitted             | [deploy.schema.json](deploy.schema.json) |

# MOJ Analytical Services Deploy.json Specification Definitions

| Property                                    | Type     | Group                                                                                                    |
| ------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| [mojanalytics-deploy](#mojanalytics-deploy) | `string` | `https://cdn.jsdelivr.net/gh/moj-analytical-services/deploy.json/deploy.schema.json#/definitions/common` |
| [type](#type)                               | `enum`   | `https://cdn.jsdelivr.net/gh/moj-analytical-services/deploy.json/deploy.schema.json#/definitions/common` |

## mojanalytics-deploy

Version of deploy.json schema you're using

`mojanalytics-deploy`

- is **required**
- type: `string`
- defined in this schema

### mojanalytics-deploy Type

`string`

All instances must conform to this regular expression (test examples
[here](<https://regexr.com/?expression=(%3F%3C%3D%5Ev%3F%7C%5Csv%3F)(%3F%3A0%7C%5B1-9%5D%5Cd*)%5C.(%3F%3A0%7C%5B1-9%5D%5Cd*)%5C.(%3F%3A0%7C%5B1-9%5D%5Cd*)(%3F%3A-(%3F%3A%5B1-9%5D%5Cd*%7C%5B%5Cda-z-%5D*%5Ba-z-%5D%5B%5Cda-z-%5D*)(%3F%3A%5C.(%3F%3A%5B1-9%5D%5Cd*%7C%5B%5Cda-z-%5D*%5Ba-z-%5D%5B%5Cda-z-%5D*))*)%3F(%3F%3A%5C%2B%5B%5Cda-z-%5D%2B(%3F%3A%5C.%5B%5Cda-z-%5D%2B)*)%3F(%3F%3D%24%7C%5Cs)>)):

```regex
(?<=^v?|\sv?)(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*)(?:\.(?:[1-9]\d*|[\da-z-]*[a-z-][\da-z-]*))*)?(?:\+[\da-z-]+(?:\.[\da-z-]+)*)?(?=$|\s)
```

## type

The type of deployment

`type`

- is optional
- type: `enum`
- default: `"webapp"`
- defined in this schema

The value of this property **must** be equal to one of the [known values below](#type-known-values).

### type Known Values

| Value          | Description |
| -------------- | ----------- |
| `airflow_dag`  |             |
| `webapp`       |             |
| `docker_build` |             |
| `lookup`       |             |

**Any** following _options_ needs to be fulfilled.

#### Option 1

- []() – `#/definitions/airflow_dag`

#### Option 2

- []() – `#/definitions/webapp`

#### Option 3

- []() – `#/definitions/lookup`
