#include <ctype.h>
#include <fcntl.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <vector_char.h>

int main(int argc, char **argv) {
  char *source = NULL;

  /**
   * @brief Read file into source.
   * source is a character array with file contents
   * It is null terminated
   */
  if (argc != 2) {
    printf("./grade_tokenize.bin [FILE PATH] \n");
    exit(1);
  }

  FILE *fp = fopen(argv[1], "r");
  if (fp == NULL) { /* Error */
    printf("Error reading file");
    exit(1);
  }
  if (fp != NULL) {
    /* Go to the end of the file. */
    if (fseek(fp, 0L, SEEK_END) == 0) {
      /* Get the size of the file. */
      long bufsize = ftell(fp);
      if (bufsize == -1) { /* Error */
        printf("Error reading file");
      }
      /* Allocate our buffer to that size. */
      source = malloc(sizeof(char) * (bufsize + 1));
      /* Go back to the start of the file. */
      if (fseek(fp, 0L, SEEK_SET) != 0) { /* Error */
      }
      /* Read the entire file into memory. */
      size_t newLen = fread(source, sizeof(char), bufsize, fp);
      if (ferror(fp) != 0) {
        printf("Error reading file");
      } else {
        source[newLen++] = '\0'; /* Just to be safe. */
      }
    }
  }
  fclose(fp);
  vector_char_t *header = vector_char_allocate();

  while(*source != '\0')
  {
    while (*source == ' ' || *source == '\t' || *source == '\n')
    {
      source++;
    }
    if (*source >= 'A'&&*source <= 'Z')
    {
      vector_char_add(header,*source);
    }
    if (*source >= 'a'&&*source <= 'z')
    {
      vector_char_add(header,*source);
    }
    if (*source >= '0'&&*source <= '9')
    {
      vector_char_add(header,*source);
    }
    
    
    
    printf("%c\n",*source);
    source++;
  }
  // TODO: Tokenize processing
  // TODO:source contains the string to be processed.
  /** Start processing file and separate into words */
  /** Pseudocode */
  // 1. Iterate over characters
  // 2. if current-character starts word start accumulating into vector_char
  // 3. if current character terminates word. print and restart word start
  // check. Free all data.
  // Hint: Use vector_char

  return 0;
}
